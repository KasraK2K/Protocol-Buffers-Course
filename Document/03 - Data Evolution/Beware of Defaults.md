# Beware of Defaults

---

## Why default values are good but dangerous
- **Default are great, but they are tricky to deal with**
- Default allow us to easily evolve Protobuf files without breaking any exiting or new codes
- They also ensure we know that field will always have a non-null values

But they are dangerous, because...
**You can not differentiate from a missing fields or if a value equal to the default was set**
&nbsp;&nbsp;

## What can we do about it?
- make sure the default value dosen't have meaning for your business
- Deal with default values in your code if needed (with if statements)
