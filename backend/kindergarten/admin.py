from django.contrib import admin

from .models import (
    Hero,
    Program,
    TypicalDay,
    Feature,
    CompoundImage,
    OpenHouseImage,
    Team,
    Contact,
    Register,
)

# Registering models
admin.site.register(Hero)
admin.site.register(Program)
admin.site.register(TypicalDay)
admin.site.register(Feature)
admin.site.register(CompoundImage)
admin.site.register(OpenHouseImage)
admin.site.register(Team)
admin.site.register(Contact)
admin.site.register(Register)


# Renaming admin portal header and title
admin.site.site_header = "Busy Bees Addis Admin"
admin.site.site_title = "Busy Bees Addis Admin Portal"
admin.site.index_title = "Welcome to Busy Bees Addis Admin Portal"
