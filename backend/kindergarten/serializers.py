from django.contrib.auth.models import User, Group

from rest_framework import serializers

from kindergarten.models import Intro, TypicalDay, CompoundImage


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
            'reading_bee_image',
            'brand',
            'motto',
            'section_title',
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
            'activities',
        ]
        read_only_fields = ['id']


class CompoundImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CompoundImage
        fields = [
            'id',
            'url',
            'compound_image',
        ]
        read_only_fields = ['id']
