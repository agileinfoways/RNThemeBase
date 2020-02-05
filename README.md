# Documentation

Following items are considered while integrating theme base application:

- Add _./core/themeProvider.js_ file in your project.
- Add below line to integrate theme in _App.js_ file

```markdown
render() {
    return (
        <ThemeContextProvider>
            <AppContainer />
        </ThemeContextProvider>
    );
}
```

- In any component when you want to use theme just need to write:
    >export default withTheme(<ScreenName\>);

## Some Useful Links

- <https://blog.benestudio.co/themes-in-react-native-16b4b0a33ed>
- <https://medium.com/backticks-tildes/simple-react-native-theme-provider-49d37578d050>