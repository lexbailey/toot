# Toot!

Makes the publish button into a toot button again.

## Installing the easy way

1. wait for someone to package a version of this for your instance and then install it from their distribution channel.

## Installing if you really want this and the easy method didn't work

1. Clone the repo
2. Edit manifest.json and change the "matches" line to include the domain name of your instance instead of "tech.lgbt" which is the instance I tested this on. (obviously you can skip this step if you are on tech.lgbt)
3. Install this extension as a temporary extension (go to `about:debugging`, click "this firefox", click "Load Temporary Add-on" and pick any file in the repo directory)
4. Realise that this is only temporary and that it's unlikely that anyone will put the effort in to maintaining this
5. Grumble a little bit about the fact that firefox does not make it easy for you to enhance your experience with fun little tools like this
6. Come to the realisation that this is somewhat motivated by security concerns
7. (Optional) Try building the extension into a zip file (type `make`) and load this as a regular extension instead. Realise that it needs to be signed. Repeat step 5.
8. Enjoy at least one last look at the toot button, and wait for the inevitable next restart of firefox at which point this extension is no longer loaded.

## PAQ (Preemptive Answers to Questions)

A: No, I will not add support for your instance, fork the repo and it yourself, it's a one line change

A: No, I will not get this extension signed by firefox so that it can be installed easily, because I will have to keep doing that every time mastodon changes and I don't want that.

A: Yes, you are welcome to publish a signed version if you like.

A: The MIT Licence, thanks for asking
