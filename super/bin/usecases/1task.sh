#!/bin/bash
N=task
T1=task-tracker
T2=project-tracker
T3=work-tracker
for i in cs en; do
  cat header-$i.html $T1-$i.html $T2-$i.html $T3-$i.html footer.html > use-case-$N-$i.html
done