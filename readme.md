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

   
    `<AvatarGroup max={4} direction="row" spacing={spacing}>
      <Avatar alt="vador" src="assets/img/01.jpg" sx={{ width: {width}, height: {height}}}/>
      <Avatar alt="luke" src="assets/img/02.jpg" sx={{ width: {width}, height: {height}}}/>
      <Avatar alt="han" src="assets/img/03.jpg" sx={{ width: {width}, height: {height}}}/>
      <Avatar alt="chewbacca" src="assets/img/04.jpg" sx={{ width: {width}, height: {height}}}/>
      <Avatar alt="leia" src="assets/img/05.jpg" sx={{ width: {width}, height: {height}}}/>
    </AvatarGroup>`
    
#
2) Composant button :

- Dans chaque scénario de ce bouton on peut modifier le type de bouton, le texte, la couleur, la largeur ainsi que la hauteur
- propriétés : text, color, variant, width, height

`<Box
      sx={{
        '& > :not(style)': { m: 1 },
      }}
    >
      <Button variant={variant} color={color} sx={{width: width}} height={height}>
        {text}
      </Button>
    </Box>`
#
3) Composant checkbox :

- Dans chaque scénario du checkbox on peut modifier la couleur, la taille, activer ou non le checkbox et cocher ou non par défaut
- propriétés : checked, color, size, disabled

`<div >
      <Checkbox {...label} defaultChecked checked={checked} color={color} size={size} disabled={disabled}/>
      <Checkbox {...label} defaultChecked color="secondary" checked={checked} size={size} disabled={disabled}/>
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <Checkbox {...label} defaultChecked sx={{color: pink[800],'&.Mui-checked': {color: pink[600],}, }} checked={checked} size={size} disabled={disabled}/>
</div>`

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

`<Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
</Typography>`

#
6) Composant radio :

- Dans chaque scénario des boutons radio on peut modifier l'emplacement du label par rapport au bouton
- propriété: labelPlacement

`<FormControl>
      <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        <FormControlLabel
          value="top"
          control={<Radio />}
          label={label}
          labelPlacement={labelPlacement} disabled={Disabled}
           
        />
        <FormControlLabel
          value="Start"
          control={<Radio />}
          label={label}
          labelPlacement={labelPlacement} disabled={Disabled}
        />
        <FormControlLabel
          value="Bottom"
          control={<Radio />}
          label={label}
          labelPlacement={labelPlacement} disabled={Disabled}
        />
       <FormControlLabel value="End" control={<Radio />} label={label} labelPlacement={labelPlacement}  disabled={Disabled}/>
      </RadioGroup>
    </FormControl>`

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


