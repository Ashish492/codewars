def descending_order(num):
   return int(''.join( sorted([ x for x in list(str(num))],reverse=True)))
print(descending_order(8769123))
