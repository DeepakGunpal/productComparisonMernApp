# productComparisonMernApp

Test
Imagine, a MERN-based comparison page that lets you compare 2 products. The page URL may look something like this:
 https://.../compare?productIds[]=p1001&productIds[]=p22
This comparison page needs to show name, price, and ratings in a table for the 2 productIds in the URL. Mongo products table has fields {_id, name, price, ratings}.

Kindly fill in the blanks to complete the outline of a comparison page code. Feel free to rewrite sentences to discuss your approach if you are uncomfortable with Redux.

a) You will use ____________ hook that returns the current state, say products, and the function ____________ that updates the state.
b) You will use ___________ hook to make an API call and post the following payload: __________ .
c) API will use the above payload and get data in **one** query: ___________. (Note: Provide the actual Mongo/Mongoose query you'd use.)
d) API will return the following JSON data: ___________.
e) _________ hook will receive this data from API and will use the function __________ to update state and re-render the component.

f) How well can you speak and understand Hindi? _____________