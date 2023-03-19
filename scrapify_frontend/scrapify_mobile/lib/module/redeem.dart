import 'package:flutter/material.dart';
import '../res/asset.dart';
import '../res/color.dart';
import '../res/style.dart';
import '../widget/button.dart';
import '../widget/tag.dart';

class RedeemPage extends StatefulWidget {
  final Map gift;
  const RedeemPage({
    Key? key,
    required this.gift,
  }) : super(key: key);

  @override
  State<RedeemPage> createState() => RedeemPageState();
}

class RedeemPageState extends State<RedeemPage> {
  void onRedeemClick() {}
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
          'Gift information',
          style: Font.subtitleLargeBold,
        ),
        centerTitle: true,
      ),
      body: SizedBox(
        width: 1000,
        height: 1000,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: ListView(
                children: [
                  const SizedBox(height: 32),
                  Image.asset(
                    Id.clothes,
                    width: double.infinity,
                    height: 360,
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 24,
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const CustomTag(name: '100 point'),
                        const SizedBox(height: 24),
                        Text(
                          widget.gift['name'],
                          style: Font.subtitleMediumBold,
                        ),
                        const SizedBox(height: 8),
                        Text(
                          widget.gift['des'],
                          style: Font.textMedium,
                        ),
                        const SizedBox(height: 150),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              child: SizedBox(
                width: double.infinity,
                child: CustomButton(
                  name: 'Redeem',
                  onPressed: onRedeemClick,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
