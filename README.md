:warning: *Use of this software is subject to important terms and conditions as set forth in the License file* :warning:

# Parse & Set App

## Description:

Parse any ticket field by using the given regex and sets the result in a custom field.

The app runs in the ticket sidebar and activates when a ticket is opened in Zendesk. It searches the fields you have configured using the regex you have supplied. If there is a match, the ticket is immediately updated with the matching value set to a custom ticket field you have configured

## Agent experience

When agent opens a new ticket, if a match is found, the ticket will immediately be updated, and a notification will flash.
 
As the app auto-updates ticket if any matched value is found, the agent should be able to continue to work as normally.

![](/assets/parse_and_set_notification.png)       

## Installation settings

Here is an example configuration which parses the initial ticket comment (=the description). 

![](/assets/parse_and_set_settings.png)

## Limitations / FAQ

#### Will the app run each time I open a ticket?

Yes. But it will abort if there is already a value in your designated custom ticket field, so it won't repeatedly update a ticket or override an already set value.   

#### Will the app run on new tickets created by my agents in Zendesk UI?

Yes, it will look at the first comment and set and set matching value, same as if the ticket arrived from a customer.  

#### Tell me more how the regex matching works

You need to use grouping to highlight what portion of a match that you want to move into your custom field.    

E.g:   

 * Excerpt from your text that you want to match: `Thank you! Your Order number: #FSH2368`
 * Your Regex: `Order number: #([a-zA-Z]{1,}[1-9]{1,})`
 * Result that will be stored in your custom field: `FSH2368` 

#### Can the app search through multiple fields?
  
Yes. Just provide all the fields you want to match against in the Fields input. 

E.g to match against both subject and description, set your Field setting to: `description, subject`.  

#### Which fields can I search through

Some popular options are: `subject`, `description`, `custom_field_99999999`

#### What if the multiple matches are possible, which value will be stored?
   
The app will stop on the first match, and discard the rest of the results. 

The search order is as follows: 

1. fields are searched in the order you listed them
2. text is searched left to right, top to bottom  

#### Can I install the app multiple times to map data into multiple fields?

Technically, yes. The app wasn't designed for this though, and it hasn't been tested.  

#### I want to search through the body of the email that created a new ticket. Is that possible?
 
Yes. Set the Field value to `description`.

#### I want to search through an update / new comment that came through. Is that possible?
 
No, the app will only let you search through the first comment (`description`). 

However you could make the app able to search through all comments with slight modifications.   

#### Can I use this app to route tickets matching my regex without agent having to open them first?

No. This app runs in the sidebar and won't activate until your agent opens the ticket. 

If you want to route tickets as soon as they arrive in your Zendesk, there are other options, like using the API.  

#### If I have a html inbound email, will the search be performed on the html or plain text in description?

Currently, it will search the html version, i.e. html tags and attributes are included in search. 

#### Show me some regex examples

You can use http://rubular.com to test and validate your regular expressions. Here are some examples:

* [URL validation](http://www.rubular.com/regexes/968)
* [5 digit zip codes](http://www.rubular.com/regexes/970)
* [yyyy-mm-dd date](http://www.rubular.com/r/MMykzZDzx0)
* [US social security](http://www.rubular.com/regexes/971)
* [Order number](http://rubular.com/r/0hzUdrlRrI)

## Screenshot(s):

![](/assets/parse_and_set_screenshot.png)

---


By downloading this app, you are agreeing to our [terms and conditions](https://github.com/zendesklabs/wiki/wiki/Terms-and-Conditions)
