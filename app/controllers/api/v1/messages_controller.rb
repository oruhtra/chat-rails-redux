class Api::V1::MessagesController < ApplicationController
  before_action :set_channel

  def index
    messages = Message.where(channel: @channel)
    messages_clean = messages.map { |m| { id: m.id, author: m.user.email, content: m.content, created_at: m.created_at } }
    render json: messages_clean
  end

  def create
    message = Message.new(message_params)
    message.user = current_user
    message.channel = @channel

    return head 422 unless message.save

    # serialized_data = ActiveModelSerializers::Adapter::Json.new(
    #   MessageSerializer.new(message)
    # ).serializable_hash
    MessagesChannel.broadcast_to @channel, message.serialize
    render json: message
  end

  private

  def set_channel
    @channel = Channel.find_by(name: params[:channel_id])
  end

  def message_params
    params.require(:message).permit(:content)
  end

end
