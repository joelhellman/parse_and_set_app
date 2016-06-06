:warning: *Use of this software is subject to important terms and conditions as set forth in the License file* :warning:

# Parse & Set App

## Description:

Parse any ticket field by using the given regex and sets the result in a custom field.

You can use http://rubular.com to test and validate your regular expressions.

### Examples

* [URL validation](http://www.rubular.com/regexes/968)
* [5 digit zip codes](http://www.rubular.com/regexes/970)
* [yyyy-mm-dd date](http://www.rubular.com/r/MMykzZDzx0)
* [US social security](http://www.rubular.com/regexes/971)
* [Order number](http://rubular.com/r/0hzUdrlRrI)
 * You can apply the following regular expression to the ticket subject if you want to read an order number containing a sequence of letters and numbers:

 * Subject: `Order number: #FSH2368`
 * Regex: `Order number: #([a-zA-Z]{1,}[1-9]{1,})`
 * Result: `FSH2368`

## Screenshot(s):

![](/assets/parse_and_set_screenshot.png)

---


By downloading this app, you are agreeing to our [terms and conditions](https://github.com/zendesklabs/wiki/wiki/Terms-and-Conditions)
