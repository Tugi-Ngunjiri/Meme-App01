class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # Add your routes here
          
     ##  To Get Memes

    get '/memes' do
        ## Return all the memes as JSON
           return memes.to_json
    end

    get '/memes/:id' do
        # return a particular meme as json based on the id param from the url
        # params always come to a string so we convert to an integer
           id = params["id"].to_i
           return memes[id].to_json
        end
    
        ## Post Memes/Create Memes
post '/memes' do
        # Pass the request into the custom getBody Function
        body=getBody(request)

           # Create a new meme
             new_meme = {title: body["title"], body:body["body"]}

             memes.push(new_meme)

             # Return the new meme as JSON
               return new_meme.to_json
            end

 ## T0 Update Route
 put '/memes/:id' do
    # get the id for the params
      id = params["id"].to_i

      # get the reuest body
       body = getBody(request)

    # update the item in question
    memes[id].title = body["title"]
    memes[id].body = body["body"]

    # Return the updated meme as JSON
    return memes[id].to_json
    end

 ## To  Delete Routes
 delete '/memes/:id' do
    # get the id for the params
      id = params["id"].to_i

    # delete the item in question
     meme = memes.delete_at(id)

# return the deleted item as json
return memes.to_json
end


      # TODO: Get all the memes
     get "/" do{
        message: "Good luck with adding our Memes"
     }

    # TODO:USer to add a meme

    get "/" do
      { message: "Good luck with your project!" }.to_json
    end
  
  end
  