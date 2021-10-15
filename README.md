# learn-vuex

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

## Vuex

The Vuex state management pattern assigns this responsibility to actions and mutations.

**Mutations** are always synchronous and are the only thing that are allowed to change the state directly. A mutation is responsible for changing only a single piece of data.

- It's convention to uppercase mutation names
- called via `commit('MUTATION_NAME', payload)`
- payload is optional
- Should not contain any logic of whether to mutate the data or not
- It's best practice to only call them from your actions (even though you do have access to calling them in components)


**Actions** can be synchronous or asynchronous and shouldn't change the state directly but call the mutations. Actions can invoke multiple mutations.

- Can be called from within other actions in the store
- Are the primary way to change state from within components
- called via `dispatch('actionName', payload)`
- payload is optional
- Can contain logic of what to mutate or not mutate
- Good practice to define as async to begin with so that if the logic changes from synchronous to asynchronous the places where you dispatch the actions don't have to change

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
