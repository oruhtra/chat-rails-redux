# Destroy messages
Message.destroy_all
# Destroy users
User.destroy_all
# Destroy channels
Channel.destroy_all

# Create channels
Channel.create(name:"paris")
Channel.create(name:"general")
Channel.create(name:"tech")

# Create users
User.create(email:"arthur@mail.com", password:"123456", password_confirmation:"123456")
User.create(email:"guillaume@mail.com", password:"123456", password_confirmation:"123456")
User.create(email:"alban@mail.com", password:"123456", password_confirmation:"123456")

messages = ["hello guys", "Hi all, how are you ?", "Best channel ever"]

# Create messages
Channel.all.each do |channel|
  User.all.each_with_index do |user, i|
    Message.create(channel: channel, user: user, content: messages[i])
  end
end
