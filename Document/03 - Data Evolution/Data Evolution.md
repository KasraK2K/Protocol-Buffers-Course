# Data Evolution

---

When you first declare a message in your Protocol, you have a define sets of requirements.
But as time go on, your business will evolve, and you may have a different set of requirements.
Some fields may change, some fields may be added and other removed.

- Now, also with time, many applications may read your messages using Protocol Buffers and you may not have the time to upgrade them
- For example, today we're asking for the First Name and Last Name of our customer, and that's our version 1 schema, but tomorrow we may ask for their phone number. that would be version 2 of our schema

**So you need to be able to evolve the source data without breaking the other application reading it**
&nbsp;&nbsp;

![[protobuf-03.png]]
&nbsp;&nbsp;

[[Rules for Data Evolution]]
[[Adding Fields]]
[[Renaming Fields]]
[[Removing Fields]]
[[Reserved Keyword]]
[[Beware of Defaults]]
&nbsp;&nbsp;

---

In the following please read [[Advanced]] concept.

---