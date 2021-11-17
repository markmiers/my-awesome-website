---
slug: "/questions/question5"
title: "Proxy redirect rule"
---

#### Proxy redirect rule

Netlify allows one to configure redirects and proxies by including a \"_redirects\" file inside the deploy folder. Alternatively, we could add them directly in the netlify.toml file which was the way I did it. The syntax for a redirect in the .toml file is as follows:

```
[[redirects]]
  from = "/netlify/anything"
  to = "https://www.google.com/search?q=anything"
  status = 301
```

The above snippet will redirect "/netlify/anything" requests to "https://www.google.com/search?q=anything"

We can use a splat to match anything that comes after /netlify, like this:

```
[[redirects]]
  from = "/netlify/*"
  to = "https://www.google.com/search?q=:splat"
  status = 301
```

That will make us query whatever we need on google.

As for the proxy rule, one only needs to change the status from 301 to 200. A live example can be seen if you click on the "Search Anything" link on the Navbar.