# pi[X]er
A simple, yet powerful, better winner picker.

This is my first real attempt at a full scale deployment of my own code, with a real world application to use it on.

The functions of this website are as follows:

  Retrieve a Twitter(X) post via URL, then parse and process the comments of the post.
  Determine elegibility of each individual comment.
  Hash the userHandle along with the const "#PIXER" hashtag along with the variable "#Hashtag" of the users choice.
  Cryptographically randomize and pick a winner.
  Provide the user with the winners userHandle, along with a verifiable hash.
  On another page, to provide users with the ability to input the verification hash, and the page produces an SVG merkle tree diagram with a lit path from the winner(node) to the root hash.
  On a third page, it includes and input and button for a potential "winners" EVM address to verify humanity by checking for >=5 transactions on Ethereum and/or Polygon.
  It then produces either a green check svg, or a red x svg respectively.
