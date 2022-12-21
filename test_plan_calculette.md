                                                                        Test plan

BDD

- L'ordre de l'opérateur 
- Nous pouvons utiliser plusieurs opérateurs
- cela fonctione uniquement avec des chiffres


TDD

- addition (+)
  - Addition est commutative 
–>(a + b = b + a)
  - si il est additionné avec 0 alors le résultat sera le nombre de départ 
–>(a + 0 = a)

- soustraction (-)

 - si le premier nombre est inferieur alors le resultat sera negatif 
  - et la soustraction n'est pas commutative 
–>(a - b != b - a)
  
- multiplication (x)

  -  Multiplication est commutative 
–>(a * b = b * a)
  -  Prends en compte le 0 
–>(a * 0 = 0)
  -  Elément d'identité est 1 
–>( a * 1 = a)
  -  Prends en compte les négatifs 
–>(a * -b = -x)

- division (/)

  - Division n'est pas commutative 
–>(a / b != b / a)
  - diviser un nombre par le meme nombre donne 1
–>( a = b => c = 1)
  - La division d’un nombre positif avec un negatif donne un nombre negatif
–>( a/ -b = -c)
  -  La division d’un nombre negatif avec un positif donne un nombre negatif
–>( -a/ b = -c)
- Pas de division par 0
 
- carre (^2)

   -le calcul du carre
 –>(2^2 = 4)
           
- Racine carrée : 

  - fonctionne seulement si c’est un nombre positif
  - le calcul de la racine carrée
 –>(racine9 = 3)
                                                                 
