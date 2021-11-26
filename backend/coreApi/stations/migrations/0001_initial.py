from django.db import migrations, models





class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Stations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=20, unique=True)),
                ('location_string', models.CharField(default='', max_length=50)),
                ('loc_stringify', models.CharField(default='', max_length=70)),
                ('capacity', models.IntegerField()),
                ('area', models.IntegerField()),
            ],
        ),
    ]
