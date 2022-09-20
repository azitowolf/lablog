---
title: Send Data Across the Network with the Form Element
metatitle: tinycode | The HTML Form Element
subtitle: For the Professional Web Developer
categories: ["HTML", "Longform"]
---

# {{title}}
# {{subtitle}}

The HTML Form is a very important element in your job at a web developer. Fundamentally, it is the primary tool that you'll have to send data from a web page to a server. A very simple form might look like this

```html
<form>
  <input type="text" />
  <button action="submit">
</form>
```

The form element provides a couple key functions for you when sending 

1. It keeps a reference to every input element contained inside it
2. It groups this content separately from any other form content on the page
3. It contains the browser interface for sending data across the internet

is a very opinionated wrapper for input elements. 

Nowadays, many frameworks wrap this element with "convenient" abstractions, but the better you understtand the fundsamentals of the element, the better you will be able to decide for yourself if the abstraction provided for you is the simplest or best option.

For example, React.js offers the following example for working with forms:

https://reactjs.org/docs/forms.html

```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```


```html

  <body>
    <form action="test.com" method="post">
      <p>
        <label>First name: <input type="text" name="firstname" /></label>
      </p>
      <p>
        <label>Last name: <input type="text" name="lastname" /></label>
      </p>
      <p>
        <label><input type="password" name="pwd" /></label>
      </p>

      <fieldset name="petfieldset">
        <legend>Pet preference</legend>

        <p>
          <label><input type="radio" name="pet" value="cat" /> Cat</label>
        </p>
        <p>
          <label><input type="radio" name="pet" value="dog" /> Dog</label>
        </p>
      </fieldset>

      <fieldset>
        <legend>Owned vehicles</legend>

        <p>
          <label
            ><input type="checkbox" name="vehicle" value="Bike" />I have a
            bike</label
          >
        </p>
        <p>
          <label
            ><input type="checkbox" name="vehicle" value="Car" />I have a
            car</label
          >
        </p>
      </fieldset>

      <p><button role="submit">Submit</button></p>
    </form>
  </body>
```





