#!/bin/bash
N=product
T1=project-tracker
T2=product-roadmap
T3=product-launch
for i in cs en; do
  cat header-$i.html $T1-$i.html $T2-$i.html $T3-$i.html footer.html > use-case-$N-$i.html
done