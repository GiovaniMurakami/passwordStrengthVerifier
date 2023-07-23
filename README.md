# Password Strength Verifier

This small project rates how strong a password is based on a list of requirements.

## How to use?

Run locally

Clone the project

```bash
  $ git clone https://github.com/GiovaniMurakami/passwordStrengthVerifier
```

Go to the project directory

```bash
  $ cd passwordStrengthVerifier
```
Start local server, i recommend Live Server VSCode extension (just click "Go Live" on the bottom side of the window of your vsCode)

After that the server is live on http://localhost:5500/

# Future features

I imagine a button 'copy to clipboard', at the moment i don't know how to do this, but i think that is not too hard

# What i learned with that project

The hard part was the validation if the password satisfies the requirements list, an array of objects was the proposed solution, with that i learned a bit more how to work with arrays and objects, more specifically, an array of objects. adding an index parameter to the forEach function was quite clever, as it lets you know which requirement was satisfied to switch the ```<i>``` tag in html to a checked icon.
