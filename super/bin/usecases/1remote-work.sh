#!/bin/bash
N=remote
T1=remote
T2=scrum
T3=task-tracker
for i in cs en; do
  cat header-$i.html $T1-$i.html $T2-$i.html $T3-$i.html footer.html > use-case-$N-$i.html
done