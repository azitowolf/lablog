---
metatitle: tinycode | How Do JSS Basic Placeholders Work?
title: Sitecore JSS Inline Placeholders
subtitle: How Basic Placeholders Work in React JSS
---

# Sitecore
[Sitecore JSS](https://www.codehousegroup.com/insight-and-inspiration/tech-stream/sitecore-headless-and-jss-what-does-it-all-mean) is a framework for building rendering applications for the [Sitecore](https://www.sitecore.com/) Content Management System.

Some CMSes that consider themselves ‘headless’ provide no framework for controlling the layout of your pages via content, but Sitecore maintains tight control over how the layout of a page comes out. The primary way that they do so is through placeholders.

![image](https://images.unsplash.com/photo-1658454153721-d47b47afc96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80)

# Placeholders
Placeholders are tagged locations in your JSX/HTML where you plan to allow content editors to add their own renderings, thereby allowing non-technical content editors to create and customize pages.

There are 3 ways to use a placeholder in JSS, and I’m covering the first one in this article, the basic method.

# Basic Placeholders in React JSS
The basic method is essentially to import a react component called “placeholder” from the Sitecore JSS library, and add it directly into the react component. The example from the Sitecore official documentation shows this example:


```js
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';

const App = ({ rendering }) => (
  <div>
    <h1>My App</h1>
    <Placeholder name="jss-main" rendering={rendering} />
  </div>
)
```
> Of course, in keeping with the rest of Sitecore’s documentation, this is just about 30% of what you need to know to actually use this component in any meaningful way.

The props that are handed to any rendering in JSS contain the rendering information for that rendering ONLY. You will not be able to access the rendering information for any other renderings if you pass in the rendering this way.

For example, using the rendering as the ‘rendering’ prop of the placeholder is really useless because you are just passing the rendering data for Appback into the placeholder inside App.

`const App = ({ rendering }) => (`

A more common use case is to want to render two child components in a layout, like so:

```js
const BlogPage = (props): JSX.Element => {
  return (
    <section className="blog-page">
      <Placeholder name="blog-page-header" rendering={route}/>
      <Placeholder name="blog-page-content" rendering={route} />
    </section>
  );
};
```
To access and render other the other components of the components above into the corresponding placeholders you will need to:

1. Export the app component with a special “HOC” wrapper that adds the Sitecore context data to the like so: `const AppWithContext = withSitecoreContext()(App);` after this, the props passed to the rendering will include the sitecore context object.

2. read that data in your component const route = props.sitecoreContext.route;
and then pass it into the placeholder as the rendering: `<Placeholder name=”jss-main” rendering={rendering} />`

3. Finally, you will need to actually create and add a “placeholder” item to the layout that you are using, in the Sitecore content editor. The placeholder list for the layout acts as a filter, so if you do not add this, the data for the placeholder you are trying to use will be blocked.

After completing the above your code should look something like this:

```js

import { withSitecoreContext } from 'sitecore/lib';

const BlogPage = (props): JSX.Element => {

  // Without the 'withSitecoreContext' HOC call, 
  // props.sitecoreContext is undefined
  const  route  = props.sitecoreContext.route;
  
  return (
    <section className="blog-page">
      <Placeholder name="blog-page-header" rendering={route}/>
      <Placeholder name="blog-page-content" rendering={route} />
    </section>
    );
};

export default withsitecoreContext()(BlogPage)
```

Now, you will be able to add the two components — `BlogPageHeader` + `BlogPageContent` (not depicted here) to the presentation details for the page in question, and render them into the placeholders above.

I hope that this article helps to ‘supplement’ the existing Sitecore JSS documentation so that those developers who come after me can learn a bit faster and suffer a bit less. Thanks for reading.

