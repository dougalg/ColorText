#Color Text#

The Color Text javascript replaces ASCII text with SVG colored circles.
For a full lookup conversion table of characters to colors, you can [see here](http://colortext.tfiaa.com/#lookup).
This is just a for-fun project with no real use, but to help me practice my JS, and learn how to make a Chrome Extension.

##Characters##
Currently, not all ASCII characters are supported, but if someone wanted them, implementing it would be easy.
Generally the characters are grouped, for example, the numbers 0-4 and 5-9 mirror each other and groupind characters such as parentheses follow a similar pattern.
In addition the letters are loosely organized by common phonemic correspondance and POA/Manner/Voicing.
ie: A red border signals a voiced consonant, vowels have yellow borders, and a dark blue center is typically bilabial. Of course, since letters do not fully correspond to phonemes this is only a loose organization.

##Version Info##
V 1.2
- Now matches font size
- Transliterates quotation marks correctly

V 1.1
- Now transliterates more stuff
- Probably no longer removes unicode text from websites

##Possible To Dos##
- Make links show up properly
- Add missing characters