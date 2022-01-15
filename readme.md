# Réservation automatique d'un créneau Basic-Fit

Renommer le fichier .env en .env.local et le remplir
```
USER=email
PASS=password
DAY=MORNING/AFTERNOON/EVENING
HOUR=16:00
```

DAY = Un créneau du matin, après midi ou le soir, attention il faut que l'horaire corresponde à un créneau matin midi ou soir !
HOUR= l'horaire au format HH:MM (dans les possibilités données par Basic-Fit, toutes les minutes)

Lancer ```yarn``` et ```yarn build && yarn start```