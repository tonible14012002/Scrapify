import 'package:flutter/material.dart';
import '../module/redeem.dart';
import '../res/asset.dart';
import '../res/style.dart';

class GiftPage extends StatefulWidget {
  const GiftPage({Key? key}) : super(key: key);

  @override
  State<GiftPage> createState() => GiftPageState();
}

class GiftPageState extends State<GiftPage> {
  late List<Map> gift = [
    {'id': 1, 'name': 'Cactus tree', 'des': 'This is description'},
    {'id': 2, 'name': 'Voucher', 'des': 'This is description of voucher'},
    {'id': 3, 'name': 'Cactus', 'des': 'This is description of cactus'},
  ];
  @override
  Widget build(BuildContext context) {
    return GridView.count(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
      crossAxisCount: 2,
      children: List.generate(
        gift.length,
        (index) {
          return InkWell(
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => RedeemPage(gift: gift[index]),
                ),
              );
            },
            child: Card(
              child: Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 12, vertical: 12),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Image.asset(
                      Id.clothes,
                      width: double.infinity,
                      height: 120,
                    ),
                    const SizedBox(height: 12),
                    Text(
                      gift[index]['name'],
                      style: Font.subtitleSmallBold,
                    ),
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
