#!/bin/bash
N=creative
T1=project-tracker
T2=work-tracker
T3=editorial
for i in cs en; do
  cat header-$i.html $T1-$i.html $T2-$i.html $T3-$i.html footer.html > use-case-$N-$i.html
done