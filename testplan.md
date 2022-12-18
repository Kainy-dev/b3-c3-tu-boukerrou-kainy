# Test plan

## BDD

- L'ordre de l'opérateur est mathématiquement correct (1 + 2 * 3 = 1 + 6 = 7)  
  - En cas d'échec : ne renvoie pas le bon résultat
- Les opérateurs doivent être utilisables entre eux ( 1 + 2 - 3 = 0)
- Test int/double overflow
- L'utilisateur ne peut pas saisir de chaîne, uniquement des chiffres


## TDD

- Ne faites que la dernière opération
  - En cas d'échec: cash

- addition (+)
  - l'addition est commutative (a + b = b + a)
  - l'élément d'identité est 0 (a + 0 = a)

- multiplication (\*)
  - la multiplication est comutative (a * b = b * a)
  -  (a * 0 = 0)
  -  l'élément d'identité est 1 ( a * 1 = a)
  -  (a * -b = -x)

- soustraction (-)
  - la soustraction n'est pas commutative (a - b != b - a)
  - soustraction : i le premier nobre inférieur que le deuxième : le résultat est négatif 

- division (/)
  - ne peut pas diviser par 0
    - en cas d'échec : affiche "impossible de diviser par 0"
  - la division n'est pas commutative (a / b != b / a)
  - Si le dividende est égal au diviseur alors le quotient est égal à 1: ( a = b => q = 1)
  - La division d'un nombre positif par un nombre négatif : le résultat est un nombre négatif ( a/ -b = -q)
  -  La division d'un nombre negatif par un nombre positif : le résultat est un nombre négatif ( -a/ b = -q)
 
-carre
   -le calcul du carre = de 2 = 4
           
- Racine carrée/ square root: 
  - la racine carrée de 9 egal à 3


