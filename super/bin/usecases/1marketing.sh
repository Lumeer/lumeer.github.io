#!/bin/bash
for i in cs en; do
  cat header-$i.html marketing-$i.html editorial-$i.html task-tracker-$i.html footer.html > use-case-marketing-$i.html
done