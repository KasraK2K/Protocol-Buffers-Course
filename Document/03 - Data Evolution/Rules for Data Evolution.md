# Rules for Data Evolution

---

1. Don't change the numeric tags for any existing fields.
2. You can add new fields, and old code just ignore them
3. Likewise, if the old / new code reads unknown data, the default will take place
4. Fields can be remove, as long as the tag number is not used again in your updated message type. You may want to rename the field instead, perhaps adding the prefix "OBSOLETE_", or make the tag reserved, so that future user of your .proto can't accidentally reuse the number.
5. For data type changes (int32 to int64 example, please refer to the documentation)
&nbsp;&nbsp;

---

In the following please read [[Adding Fields]] concept.

---