# Collaboration

- Willy Dian
- Thomas Tran Dinh

# Lancement du Projet

- yarn install
- yarn storybook

# Visuel du projet

<img width="1280" alt="Capture d’écran 2022-10-19 à 01 16 37" src="https://user-images.githubusercontent.com/62612755/196603819-e9076ad9-61fa-4153-a272-c8235abe5cad.png">

# Détail des composants

1) Composant avatar :

- Dans chaque scénario des avatars on peut modifier la largeur, la hauteur et l'espacement
- propriétés : spacing, width, height

Exemple d'utilisation :

`<Avatar alt="vador" src="assets/img/01.jpg" sx={{ width: {50}, height: {50}}}/>`
    
#
2) Composant button :

- Dans chaque scénario de ce bouton on peut modifier le type de bouton, le texte, la couleur, la largeur ainsi que la hauteur
- propriétés : text, color, variant, width, height

Exemple d'utilisation :

`
      <Button variant={contained} color={secondary} sx={{width: 200px}} height={5px}> {Plutot Réact ou Vue ?} </Button>`
#
3) Composant checkbox :

- Dans chaque scénario du checkbox on peut modifier la couleur, la taille, activer ou non le checkbox et cocher ou non par défaut
- propriétés : checked, color, size, disabled

Exemple d'utilisation :

    ` 
<Checkbox checked={true} color={primary} size={small} disabled={false}/>`


#
4) Composant paper :

- Dans chaque scénario de papier on peut modifier la niveau d'élévation des 2 cases affichées
- propriétés : lvl1, lvl2

`<Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {[lvl1, lvl2].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {text}= {elevation}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>`

#
5) Composant progress :

- Dans chaque scénario de cercle de progression on peut modifier l'intervalle de temps du compte à rebours
- propriété: step

Exemple d'utilisation :

`<Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
</Typography>`

#
6) Composant radio :

- Dans chaque scénario des boutons radio on peut modifier l'emplacement du label par rapport au bouton
- propriété: labelPlacement

`
    <FormControlLabel
        value="top"
        control={<Radio />}label={label}
        labelPlacement={labelPlacement} 
        disabled={Disabled}
    />
        `

#
7) Composant rating :

- Dans chaque scénario du rating on peut modifier la précision des notes d'évaluation
- propriété: precision

`<Stack spacing={1}>
      <Rating name="half-rating" defaultValue={1} precision={precision} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
</Stack>`

#
8) Composant slider :

- Dans chaque scénario du slider on peut modifier le pas de la glissière et sa position par défaut
- propriétés: step, defaultValue

`<Box sx={{ width: 300 }}>
     <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> 
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={step}
        marks
        min={10}
        max={110}
      />
      
</Box>`

#
9) Composant snackbar :

- Dans chaque scénario du snackbar on peut modifier la nature et le texte à la fois du bouton et du message, ainsi que la couleur 
- propriétés: severity, text, color, message

`<Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant="outlined" onClick={handleClick} color={color}>
        {text}
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
</Stack>`

#
10) Composant transition :

- Dans chaque scénario du composant transition on peut modifier la vitesse d'affichage de l'animation
- propriété: speed

`<Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label={label}
/>
      <Box sx={{ display: 'flex' }}>
        <Grow in={checked}>{icon}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: speed } : {})}
        >
          {icon}
        </Grow>
      </Box>
</Box>`


# Langages

- React 18.2.0
- Librairie : Matérial UI


