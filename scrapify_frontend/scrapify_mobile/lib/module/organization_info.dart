import 'package:flutter/material.dart';

import '../res/asset.dart';
import '../res/color.dart';
import '../res/style.dart';

class OrganizationInfo extends StatefulWidget {
  const OrganizationInfo({Key? key}) : super(key: key);

  @override
  State<OrganizationInfo> createState() => OrganizationInfoState();
}

class OrganizationInfoState extends State<OrganizationInfo> {
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
        leading: IconButton(
          padding: const EdgeInsets.symmetric(
            horizontal: 16,
            vertical: 0,
          ),
          icon: const Icon(
            Icons.arrow_back_ios_new,
            color: Cl.grayscaleText,
            size: 24,
          ),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
        title: const Text(
          'Organization profile',
          style: Font.subtitleLargeBold,
        ),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 32),
        child: Column(
          children: [
            ListTile(
              leading: Image.asset(
                Id.avatarOrganization,
                fit: BoxFit.fill,
              ),
              title: Text(
                'VietNam  Red Cross Community',
                style: Font.subtitleMediumBold,
              ),
              subtitle: Text(
                'Curated to keep you fascinated about nature',
                style: Font.textSmall,
              ),
            ),
            Text(
              'About',
              style: Font.subtitleMediumBold,
            ),
            const
            Text(
              'The International Red Cross and Red Crescent Movement is the largest humanitarian network in the world. Its mission is to alleviate human suffering, protect life and health, and uphold human dignity, especially during armed conflicts and other emergencies.',
              style: Font.textSmall,
            ),
          ],
        ),
      ),
    );
  }
}
