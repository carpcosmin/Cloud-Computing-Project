# Trip Booking Website
### Carp Cosmin, grupa 1131
Link publicare:
https://trip-management-app-93c87.web.app/

# 1. Introducere
Această documentație oferă o prezentare a proiectului unei agenții de turism care utilizează un site web pentru gestionarea rezervărilor. Site-ul este dezvoltat folosind HTML, CSS și JavaScript, iar pentru funcționalitatea backend-ului, este utilizată platforma Firebase. Firebase oferă servicii precum autentificare, bază de date în timp real și hosting.

# 2. Descriere problemă
Agențiile de turism necesită o platformă eficientă pentru gestionarea rezervărilor și a informațiilor despre clienți. Site-ul web dezvoltat oferă o interfață ușor de utilizat pentru clienți pentru a face rezervări și pentru agenți pentru a gestiona aceste rezervări în timp real.

# 3. Descriere API
Proiectul utilizează serviciile Firebase pentru a gestiona autentificarea utilizatorilor și stocarea datelor rezervărilor într-o bază de date în timp real. Iată o prezentare a API-ului utilizat:

- Firebase Authentication: Furnizează funcționalitatea de autentificare a utilizatorilor folosind diverse metode precum e-mail și parolă, Google, Facebook etc.
- Firebase Realtime Database: O bază de date NoSQL în timp real care permite stocarea și sincronizarea datelor între utilizatori în timp real. Aceasta este utilizată pentru a stoca detaliile rezervărilor.

# 4. Flux de date
Pentru a realiza o rezervare, utilizatorul completează un formular disponibil pe homepage-ul site-ului web. Datele introduse de utilizator sunt apoi trimise către Firebase pentru a fi salvate în baza de date în timp real.

### Metode HTTP
POST: Utilizat pentru a crea o nouă rezervare în baza de date.

### Autentificare și autorizare
Autentificarea utilizatorilor este gestionată de Firebase Authentication, asigurând că doar utilizatorii autentificați au acces la funcționalitățile site-ului, cum ar fi realizarea unei rezervări.
