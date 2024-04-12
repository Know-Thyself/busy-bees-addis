from django.contrib.auth.models import User, Group

from rest_framework import serializers

from kindergarten.models import (
    Intro,
    TypicalDay,
    Feature,
    CompoundImage,
    OpenHouseImage,
    Team,
    Address,
    Register,
)


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class IntroSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Intro
        fields = [
            'id',
            'url',
            'logo',
            'hero_image',
            'brand',
            'motto',
            'program_title',
            'program',
        ]
        read_only_fields = ['id']


class TypicalDaySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TypicalDay
        fields = [
            'id',
            'url',
            'title',
            'reading_bee_image',
            'activities',
        ]
        read_only_fields = ['id']


class FeatureSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Feature
        fields = [
            'id',
            'url',
            'title',
            'description',
            'icon_name',
        ]
        read_only_fields = ['id']


class CompoundImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CompoundImage
        fields = [
            'id',
            'url',
            'compound_image',
            'caption',
        ]
        read_only_fields = ['id']


class OpenHouseImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OpenHouseImage
        fields = [
            'id',
            'url',
            'open_house_image',
            'caption',
        ]
        read_only_fields = ['id']


class TeamSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Team
        fields = [
            'id',
            'url',
            'name',
            'position',
            'image',
            'about',
        ]
        read_only_fields = ['id']


class AddressSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Address
        fields = [
            'id',
            'url',
            'street',
            'city',
            'country',
            'phone_number_1',
            'phone_number_2',
            'phone_number_3',
            'image',
            'facebook',
            'instagram',
        ]
        read_only_fields = ['id']


class RegisterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Register
        fields = [
            'id',
            'url',
            'title',
            'subtitle',
            'requirements',
        ]
        read_only_fields = ['id']
