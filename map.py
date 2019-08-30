import folium

# Create map object
m = folium.Map(location=[45.815399, 15.966568], zoom_start=12)

# Global tooltip
tooltip = 'EntCode'

# Create markers
folium.Marker([45.815399, 15.966598],
              popup='<strong>Ent Code</strong>',
              tooltip=tooltip,
              icon=folium.Icon(icon='cloud')).add_to(m),

# Generate map
m.save('map.html')
