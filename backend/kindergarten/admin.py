from django.contrib import admin

from .models import Intro, TypicalDay, Feature, CompoundImage, OpenHouseImage, Team

# Registering models

admin.site.register(Intro)
admin.site.register(TypicalDay)
admin.site.register(Feature)
admin.site.register(CompoundImage)
admin.site.register(OpenHouseImage)
admin.site.register(Team)


# Renaming admin portal header and title
admin.site.site_header = "Busy Bees Addis Admin"
admin.site.site_title = "Busy Bees Addis Admin Portal"
admin.site.index_title = "Welcome to Busy Bees Addis Admin Portal"
