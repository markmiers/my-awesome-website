---
slug: "/questions/question7"
title: "Build script returned non-zero exit code: 2"
---

#### Build script returned non-zero exit code: 2

Taking a quick look at your foruns, I can see this post:

https://answers.netlify.com/t/new-ci-true-build-configuration-treating-warnings-as-errors-because-process-env-ci-true/14434

This leads me to believe that the change made on June 15th 2020 may have something to do with this since one some situations, what was once a warning is now handled as an error, causing builds to halt.

I'm going to assume this has something to do with it and leverage those notes. My reply would be the following:

Hello

Hope this email finds you well, and I'm sorry to hear you are having trouble with our service.
Taking a look at your build logs I can see that it failed on this step:

```
Build failed due to a user error: Build script returned non-zero exit code: 2
```

We need your help to better understand this issue:

- Apart from making code changes (which triggered this build) did you tweak any setting or configuration file?
- Can you share a small video sample on how you are making the builds up the point where the error is thrown
- When was your last successfull build?

On a separate note, we have recently started to implement a new variable CI=true on our builds, which has been agreed as the standard in the industry. However, one concern is that some libraries may now interpret what were previously just warnings as hard errors that will halt a build. The intention is that developers should not ship potentially broken configurations, but the downside is that builds that successfully completed previously may fail after this change.

One way you can test this is to explicitly set the CI variable in your [build](https://docs.netlify.com/configure-builds/environment-variables/#declare-variables) or explicitly for an individual command like:

```
CI=true npm run build
```

I hope that helps!
Hope to hear from you soon.

Gualter