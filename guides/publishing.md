# Distribution maintenance

The owner approved public publication under MIT on 2026-11-17. The public repository is https://github.com/christian-ri/bepstudio-schemas. The private application stays in its existing repository. Keep future updates limited to this distribution.

1. Review every file in this directory. Confirm the examples are synthetic and the Zod notice is included. Retain the approved MIT license for original material.
2. Regenerate from the private checkout using `npm run schemas:public`, then run `npm run test:public-schemas`.
3. Copy only this directory into a fresh empty directory outside the private checkout. Never copy its parent, Git history, environment files, application source, standard source files or customer data.
4. Initialize that fresh directory with `git init -b main`, review `git status`, and create an initial commit.
5. After explicit publication approval, create `christian-ri/bepstudio-schemas` as a public repository and push only that fresh history. A possible command from the fresh directory is `gh repo create christian-ri/bepstudio-schemas --public --source=. --remote=origin --push`.
6. Confirm the repository exists and its Actions checks pass. Then add its actual URL to the website Developers & AI page and llms.txt.
7. Release the private application and website through reviewed main/demo changes using the established release process.

No remote creation, push, deployment or license selection is performed by the preparation scripts.
