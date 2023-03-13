require 'sinatra'

## Model/Dataset

Memes = [{title: "First Meme", body: "content of first meme"}]

## Index route
get '/memes' do
    ## Return all the memes as JSON
       return memes.to_json
end


## Show Route
get '/memes/:id' do
    # return a particular meme as json based on the id param from the url
    # params always come to a string so we convert to an integer
       id = params["id"].to_i
       return memes[id].to_json
    end

    ## Create Route 
    post '/memes' do
        # Pass the request into the custom getBody Function
        body=getBody(request)

           # Create a new meme
             new_meme = {title: body["title"], body:body["body"]}

             memes.push(new_meme)

             # Return the new meme as JSON
               return new_meme.to_json
            end


    ## Update Route
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

    ## Delete Route
        delete '/memes/:id' do
            # get the id for the params
              id = params["id"].to_i

            # delete the item in question
             meme = memes.delete_at(id)
 
  # return the deleted item as json
   return memes.to_json
end


