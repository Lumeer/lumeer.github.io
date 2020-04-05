#!/bin/bash
N=agile
T1=scrum
T2=issue
T3=product-roadmap
for i in cs en; do
  cat header-$i.html $T1-$i.html $T2-$i.html $T3-$i.html footer.html > use-case-$N-$i.html
done