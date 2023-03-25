import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../res/asset.dart';
import '../res/style.dart';
import '../service/data_provider.dart';
import '../widget/product_card.dart';

class FinishedPage extends StatefulWidget {
  const FinishedPage({Key? key}) : super(key: key);

  @override
  State<FinishedPage> createState() => FinishedPageState();
}

class FinishedPageState extends State<FinishedPage> {
  List<Map> matched = [];
  Future<void> getMatched() async {
    final response = await Provider.of<MatchedProvider>(context, listen: false)
        .fetchMatched(1);
    setState(() {
      matched = response;
    });
  }

  @override
  void initState() {
    super.initState();
    getMatched();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: Column(
          children: [
            Consumer<MatchedProvider>(
              builder: (context, provider, child) => provider.matched.isEmpty
                  ? const CircularProgressIndicator()
                  : ListView.builder(
                      shrinkWrap: true,
                      itemCount: provider.matched.length,
                      itemBuilder: (context, index) {
                        final matched = provider.matched[index];
                        if (matched['status'] == 'FINISHED') {
                          return Card(
                            margin: const EdgeInsets.all(16),
                            child: Padding(
                              padding: const EdgeInsets.all(12),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Row(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceBetween,
                                    children: [
                                      Text(
                                        matched['item']['name'],
                                        style: Font.subtitleLargeBold,
                                      ),
                                    ],
                                  ),
                                  Row(
                                    children: [
                                      Image.asset(
                                        Id.clothes,
                                        width: 120,
                                        height: 120,
                                      ),
                                      const SizedBox(width: 16),
                                      Expanded(
                                        child: Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.spaceBetween,
                                          children: [
                                            Row(
                                              mainAxisAlignment:
                                                  MainAxisAlignment
                                                      .spaceBetween,
                                              children: [
                                                const Text(
                                                  'Weight',
                                                  style: Font.textMedium,
                                                ),
                                                Text(
                                                  matched['item']['weight'],
                                                  style: Font.textMedium,
                                                ),
                                              ],
                                            ),
                                            Row(
                                              mainAxisAlignment:
                                                  MainAxisAlignment
                                                      .spaceBetween,
                                              children: [
                                                const Text(
                                                  'Count',
                                                  style: Font.textMedium,
                                                ),
                                                Text(
                                                  matched['item']['count']
                                                      .toString(),
                                                  style: Font.textMedium,
                                                ),
                                              ],
                                            ),
                                            Row(
                                              mainAxisAlignment:
                                                  MainAxisAlignment
                                                      .spaceBetween,
                                              children: [
                                                const Text(
                                                  'Recipient',
                                                  style: Font.textMedium,
                                                ),
                                                const SizedBox(width: 16),
                                                Expanded(
                                                  child: Text(
                                                    matched['event']
                                                        ['recipient_name'],
                                                    style: Font.textMedium
                                                        .copyWith(
                                                            color: Colors.red),
                                                    overflow:
                                                        TextOverflow.ellipsis,
                                                  ),
                                                ),
                                              ],
                                            ),
                                            Row(
                                              mainAxisAlignment:
                                                  MainAxisAlignment.end,
                                              children: [
                                                IconButton(
                                                  onPressed: () {},
                                                  icon: const Icon(
                                                    Icons.delete,
                                                    color: Colors.red,
                                                  ),
                                                ),
                                              ],
                                            )
                                          ],
                                        ),
                                      ),
                                    ],
                                  )
                                ],
                              ),
                            ),
                          );
                        } else {
                          return Center(
                            child: Text('Empty'),
                          );
                        }
                      },
                    ),
            ),
          ],
        ),
      ),
    );
  }
}
