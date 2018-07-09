class Message < ApplicationRecord
  belongs_to :user
  belongs_to :channel

  include Storext.model
  store :settings, coder: JSON

  validate :settings_types

  store_attributes :settings do
    color String
    font String, default: "Arial"
    bold Boolean, default: true
    words Integer, default: 0
  end

  def serialize
    message_clean = self.attributes.except('user_id', 'updated_at')
    message_clean['author'] = self.user.email
    return message_clean.symbolize_keys
  end

  private

  def settings_types
    validation = settings[:color].class == String &&
      settings[:font].class == String &&
      (settings[:bold].class == TrueClass || settings[:bold].class == FalseClass) &&
      settings[:words].class == String
    unless validation
      errors.add(:settings, "wrong format")
    end
  end
end
