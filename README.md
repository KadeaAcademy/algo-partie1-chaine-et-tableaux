<h1>Guide d'utilisation des exercices</h1>
<h2>Préparation de l'environnement</h2>
<ol>
<li>Cloner le repository dans un dossier de votre système : <code>git clone <a href="https://github.com/Kinshasa-Digital-Academy/algo-partie1-chaine-et-tableaux.git">https://github.com/Kinshasa-Digital-Academy/algo-partie1-chaine-et-tableaux.git</a></code></li>
<li>Si ce n'est pas encore fait, installer <strong>jest</strong> globalement : <code>npm install -g jest</code></li>
<li>Ouvrez votre éditeur préféré dans le dossier que vous aviez précédemment cloné</li>
</ol>
<hr />
<h2>Comment écrire du code?</h2>
<p>Les noms des dossiers correspondent aux noms des exercices, et dans chaque dossier vous verrez 2 fichiers:
<ul>
<li>Le fichier <code>index.js</code> où se trouve la signature de la fonction à écrire.C'est le seul fichier avec lequel vous allez travailler.Et pour chaque fonction, il y a son explication dans les commentaires</li>
<li>Le fichier <code>test.js</code>où j'ai mis les codes des tests unitaires.Vous ne devez pas y toucher</li>
</ul>
</p>
<hr />
<h2>Comment tester si mon algorithme marche?</h2>
<p>A partir de votre terminal, positionnez-vous dans le dossier principe du repository cloné puis écrivez la commande : <br />
  <pre><code>jest nom_du_dossier_de_la_fonction/test.js --watch</code></pre>
  Où <strong>--watch</strong> va lancer le test à chaque fois que vous sauvegarder votre fichier.<br>
  A chaque fois vous aurez un rapport sur :
  <ul>
  <li>le nombre des tests executés</li>
  <li>le nombre des tests réussis</li>
  <li>le nombre des tests échoués</li>
  L'exerice est considéré comme une réussite si tous les test réussissent.Et cas d'échec,vous pouvez regarder dans le rapport du test.
  N'hésitez pas à tester votre fonction dans la console du navigateur.
  </ul> 
</p>
<hr />
<h2>Critère pour chaque exercice</h2>
<p>
Pour chaque exercice vous devez écrire au minimum 2 solutions.Vous allez donc mettre en commentaire les autres solutions pour éviter le conflit de noms des fonctions.
</p>
