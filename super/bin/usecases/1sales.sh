#!/bin/bash
N=sales
T1=crm
T2=project-tracker
T3=supply
for i in cs en; do
  cat header-$i.html $T1-$i.html $T2-$i.html $T3-$i.html footer.html > use-case-$N-$i.html
done