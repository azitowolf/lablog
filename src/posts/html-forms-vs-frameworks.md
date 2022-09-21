---
title: Forms vs. Frameworks
metatitle: tinycode | Forms vs. Frameworks
subtitle: For the Professional Web Developer
categories: ["HTML", "Longform"]
---

form element
1. It keeps a reference to every input element contained inside it
2. It groups this content separately from any other form content on the page
3. It contains the browser interface for sending data across the internet
4. It contains all the form validation through the <input> element


# Forms vs. Frameworks

Nowadays, many frameworks wrap this element with convenient abstractions, but the better you understtand the fundsamentals of the element, the better you will be able to decide for yourself if the abstraction provided for you is the simplest or best option.

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
  <form id="form2">
    <input type="text" name="name"/>
    <button type="submit">submit</button>
  </form>
  <script>
    form2.addEventListener('submit', (event) => {
    let formData = new FormData(form2);
    alert(formData.get('name'))
  })
  </script>
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



