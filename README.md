About this project:

this is a<strong> react</strong> app that uses<strong> axios </strong>to fetch data from <strong>google books api</strong> and managing the state using <strong> redux</strong> and <strong> semantic ui </strong> is used for styling


specifications: 


The app shows an input with a "search" button and two drop down menus,one for specifying caregory and one for specifying ordering of books.

The search can be triggered either by pressing "Enter when focus is on the input field , or by clicking the search button.

If the input field is empty,no results will be displayed.

When search is triggered , the values of the input field along with the values from the drop downs are retrieved and placed within the get request and will retrieve data starting from index 0 and with a maximum number of results fixed to 30.

If any change is made to the input field or drop down selections,start index, state and total are reseted.

when search is triggered, a mock objet is appended to state to display a loading spinner to let the user know data is loading.


Axios is used to do the fetching and errors are handled by rendering a component to let the user know something went wrong.

When data is fetched successfully ,the mock object is removed from state and real data is appended.

A total number of result is displayed  and below it a representation of the 30 book objects fetched and an "add more.." button at the bottom.

When clicked,the add more button sends the same get request but this time with the starting index increased by 30.

When there are no more results to display and the amount of results displayed is equal to total the load more button does not appear

In the results the books are shown in cards that contain the following information , image,title,author,category.

When user clicks on a specific card,the app routes to a details page displaying book details including a description of the book.


