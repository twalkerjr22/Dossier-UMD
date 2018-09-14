require 'Twitter'
require 'date'

t = Time.now.strftime("%Y-%m-%d")
#puts "Greetings, World!"
puts t

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "26OEaP2P81tb9nxbttp1FPRwi"
  config.consumer_secret     = "4Cto7USB9jjoMw9oLiMQm1oLusd2ZsqTzurBnMUooEsNXfUMrh"
  config.access_token        = "473043430-tT6GX1Wt3WgLfpn5XCiIloLSDiZCFzZw6inkkVCn"
  config.access_token_secret = "5O6kGkLI1rf4TYlvH3npeu2TOWNyLa7wbCYYkncvFfpFx"
end

OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE

oFile = File.new("toll_" + t + ".csv", "w")
if oFile
   puts "File Open"

   search_term = ["Donald Trump"]

   search_term.each do |keyword|
	   client.search(keyword).each do |tweet|
	   t = tweet.text.dup

	   oFile.syswrite("#{tweet.created_at}\t #{tweet.user.screen_name}\t #{t.gsub(/\n/, " ")}\n")
	   end
	   puts keyword + " completed!"
	end
end
oFile.close
