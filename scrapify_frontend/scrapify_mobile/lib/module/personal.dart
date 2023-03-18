import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import '../res/asset.dart';
import '../res/color.dart';
import '../res/style.dart';
import '../module/notification.dart';

class PersonalPage extends StatefulWidget {
  const PersonalPage({Key? key}) : super(key: key);

  @override
  State<PersonalPage> createState() => PersonalPageState();
}

class PersonalPageState extends State<PersonalPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        shape: const Border(
          bottom: BorderSide(
            color: Color.fromRGBO(102, 102, 102, 0.08),
          ),
        ),
        backgroundColor: Colors.white,
        title: const Text(
          'Personal',
          style: Font.subtitleLargeBold,
        ),
        centerTitle: false,
        actions: <Widget>[
          IconButton(
            icon: const Icon(
              FontAwesomeIcons.solidBell,
              color: Cl.brandPrimaryBase,
            ),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const NotificationPage(),
                ),
              );
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(
          horizontal: 16,
          vertical: 24,
        ),
        scrollDirection: Axis.vertical,
        child: Column(
          children: [
            const SizedBox(height: 24),
            Center(
              child: ClipOval(
                child: CircleAvatar(
                  radius: 80,
                  child: Image.asset(
                    Id.pikachu,
                    width: 160,
                    height: 160,
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ),
            ListTile(
              title: const Text(
                'Username',
                style: Font.subtitleMediumBold,
              ),
              subtitle: const Padding(
                padding: EdgeInsets.only(top: 11),
                child: Text(
                  'dhiueksi298',
                  style: Font.textMedium,
                ),
              ),
              contentPadding: const EdgeInsets.fromLTRB(0, 37, 0, 16),
              onTap: () {},
            ),
            const Divider(
              height: 1,
              color: Color.fromRGBO(102, 102, 102, 0.08),
            ),
            ListTile(
              title: const Text(
                'Email address',
                style: Font.subtitleMediumBold,
              ),
              subtitle: const Padding(
                padding: EdgeInsets.only(top: 11),
                child: Text(
                  'Sallie Satama',
                  style: Font.textMedium,
                ),
              ),
              trailing: Text(
                'Edit',
                style: Font.subtitleSmallBold.copyWith(
                  color: Cl.brandPrimaryBase,
                ),
              ),
              contentPadding: const EdgeInsets.fromLTRB(0, 37, 0, 16),
              onTap: () {},
            ),
            const Divider(
              height: 1,
              color: Color.fromRGBO(102, 102, 102, 0.08),
            ),
            ListTile(
              title: const Text(
                'Phone number',
                style: Font.subtitleMediumBold,
              ),
              subtitle: const Padding(
                padding: EdgeInsets.only(top: 11),
                child: Text(
                  '0783948338',
                  style: Font.textMedium,
                ),
              ),
              trailing: Text(
                'Edit',
                style: Font.subtitleSmallBold.copyWith(
                  color: Cl.brandPrimaryBase,
                ),
              ),
              contentPadding: const EdgeInsets.fromLTRB(0, 37, 0, 16),
              onTap: () {},
            ),
            const Divider(
              height: 1,
              color: Color.fromRGBO(102, 102, 102, 0.08),
            ),
            ListTile(
              title: const Text(
                'Password',
                style: Font.subtitleMediumRegular,
              ),
              trailing: Text(
                'Edit',
                style: Font.subtitleSmallBold.copyWith(
                  color: Cl.brandPrimaryBase,
                ),
              ),
              contentPadding: const EdgeInsets.fromLTRB(0, 37, 0, 16),
              onTap: () {},
            ),
            const Divider(
              height: 1,
              color: Color.fromRGBO(102, 102, 102, 0.08),
            ),
            ListTile(
              title: Text(
                'Logout',
                style: Font.subtitleMediumBold.copyWith(
                  color: Cl.statesErrorBase,
                ),
              ),
              contentPadding: const EdgeInsets.fromLTRB(0, 32, 0, 0),
              onTap: () {},
            ),
          ],
        ),
      ),
    );
  }
}
