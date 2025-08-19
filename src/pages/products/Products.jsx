import styles from './Products.module.css';

export default function Products() {
  const categories = {
    mayonnaise: {
      title: "MAYONNAISE & FLAVOURED MAYONNAISE",
      products: [
        { code: "29842", name: "THOUSAND ISLAND DRESSING", description: "Classic thousand island dressing sauce with rich and creamy mayo base well balanced with pickled relish and tomato profile", application: "Various culinary applications like Spread, dipping sauce" },
        { code: "25007", name: "TANDOORI MAYONNAISE", description: "Traditional Indian Tandoori flavoured creamy mayonnaise" },
        { code: "29887", name: "MINT MAYONNAISE", description: "Thick and creamy mayonnaise with aromatic mint profile" },
        { code: "25700", name: "CHIPOTLE MAYONNAISE", description: "Thick and creamy mayonnaise with smoky chipotle chilli profile" },
        { code: "20775", name: "CHEEZY JALAPENO SAUCE", description: "Rich creamy sauce with the right addition of jalapeno slices and cheddar cheese" },
        { code: "27738", name: "DELITE MAYONNAISE", description: "Low fat mayonnaise" },
        { code: "27501", name: "CLASSIC MAYONNAISE", description: "Classic mayo with medium fat" },
        { code: "25006", name: "GARLIC MAYONNAISE", description: "Garlic flavour infused creamy mayonnaise" }
      ]
    },
    sauces: {
      title: "SAUCES AND DIPS",
      products: [
        { code: "26070", name: "SPICY PEANUT DIP", description: "Peanut based dipping sauce with a spicy note and tadka profiles", application: "Various culinary applications like Spread, dipping sauce, drizzle sauce etc" },
        { code: "29890", name: "AAM PANNA SPREAD", description: "Traditional chatpata style spread with the base taste of green mangoes" },
        { code: "29528", name: "MANGO SPREAD", description: "Sweet and sour mango based spread sauce" },
        { code: "29891", name: "PINEAPPLE SPREAD", description: "Sweet and sour Pineapple based spread sauce" },
        { code: "24935", name: "CHEESE BLEND SAUCE", description: "Rich cheddar based sauce with a light reddish colour" },
        { code: "29878", name: "AMERICANA SAUCE", description: "Perfect combination of sauteed chilli and oriental spices marrys Classic American style BBQed sauce" },
        { code: "28496", name: "JALAPENO SALSA", description: "Traditional Mexican salsa sauce with jalapenos" },
        { code: "23238", name: "SRIRACHA SAUCE", description: "Authentic Thai style Sriracha sauce with the perfect balanced combination of fermented chillies and sweet and spicy notes" },
        { code: "25309", name: "PICANTE SALSA DIP", description: "Traditional Mexican salas with Picante chilies" },
        { code: "28106", name: "PINEAPPLE CHATPATA SAUCE", description: "Pineapple base sauce with a dash of Robust indian chapata profile" },
        { code: "27005", name: "TOMATO KETCHUP", description: "Classic tomato ketchup" },
        { code: "22420", name: "PERI PERI SAUCE", description: "Traditional peri peri sauce with a hint of garlic and herbs" },
        { code: "22286", name: "SPICY TOMATO KETCHUP", description: "Classic tomato ketchup with a dash of chilli" },
        { code: "27697", name: "PIZZA PASTA SAUCE", description: "Plum tomato based pizza sauce with the right combination of herbs and spices" },
        { code: "22530", name: "BARBEQU SAUCE ORGINAL", description: "Classic American style BBQ sauce with the sweet, smoky and mild spicy characteristics" },
        { code: "27747", name: "SMOKY BBQ SAUCE", description: "BBQ sauce enhanced with more smoky note" },
        { code: "20967", name: "HONEY MUSTARD SAUCE", description: "Mustard sauce with a right blend of honey" },
        { code: "29971", name: "CHILLI GARLIC SAUCE", description: "Garlic dominated chili sauce supporting with ginger and umami" },
        { code: "20789", name: "CHILLI GARLIC DIP", description: "Diping sauce with the prominent taste of chillies well suported with garlic" },
        { code: "20774", name: "IMLI SONTH CHATAKA", description: "Sweet and tangy sauce with the right combination of tamarind and dates" },
        { code: "21100", name: "MANGO CHILLI DIP", description: "Mild spicy dipping sauce well balanced with the combination of visula chiles over a base of fruity mangoes" },
        { code: "20814", name: "MOMO DIP", description: "Spicy chilli based momo sauce" },
        { code: "21721", name: "PUDINA CHATAKA", description: "Mint prominent sauce well balanced with chat spices" },
        { code: "21384", name: "THAI CHILLI DIP", description: "Tomato and chili base sauce with apeealing garlic and chilli flakes" },
        { code: "23661", name: "RED CHILLI SAUCE FOR BHELPURI", description: "Red Chilli sauce for bhelpuri application" },
        { code: "23639", name: "GREEN CHILLI SAUCE FOR BHELPURI", description: "Green Chilli sauce for bhelpuri application" },
        { code: "23512", name: "TAMARIND SAUCE FOR BHELPURI", description: "Sweet and tangy sauce for bhelpuri application" }
      ]
    },
    oriental: {
      title: "ORIENTAL CULINARY SAUCES",
      products: [
        { code: "29893", name: "SZECHWAN SAUCE", description: "Traditional Chinese Szechwan profile with the prominent taste of Chilli well supported with garlic, ginger and szechwan pepper", application: "Base for preparing various Oriental dishes", dosage: "Dilution ratio: 1:2 (Gravy : Water)" },
        { code: "28852", name: "HOT GARLIC SAUCE", description: "Garlic dominated spicy Chinese sauce" },
        { code: "28853", name: "KUNG PAO", description: "Balanced savory, sweet and spicy with soy and traditional Chinkiang vinegar" },
        { code: "28854", name: "NASI GORENG", description: "Aromatic sweet and spicy soy flavored sauce." },
        { code: "30106", name: "KUNG PAO ORIENTAL SAUCE", description: "Mild spicy and tangy sauce with an prominent taste of Mirin with an enhanced umami profile" },
        { code: "30107", name: "BLACK PEPPER SAUCE", description: "Oriental style black pepper sauce with the right combination of soya sauce, vegetable oyster sauce and sauteed ginegr and garlic profile" },
        { code: "30108", name: "SZECHWAN SAUCE", description: "Chilli based spicy sauce base with szechwan pepper corns and right addition of ginger and garlic" },
        { code: "30109", name: "MANCHURIAN SAUCE", description: "Spicy soya and ginger garlic prominent sauce base" },
        { code: "21466", name: "HOISIN SAUCE", description: "Sweet and mild smoked sauce with the base taste of soya well suported with oriental spices" },
        { code: "29968", name: "HONEY CHILLI SAUCE", description: "Sweet and sour sauce with the base taste of chilli well blanced with ginger, garlic and honey" },
        { code: "30032", name: "THAI RED CURRY SAUCE", description: "Red Curry paste with aromatic Thai spices and herbs", application: "Thai curries", dosage: "1:4 (Curry paste : coconut cream)" },
        { code: "30033", name: "THAI GREEN CURRY SAUCE", description: "Green Curry paste with aromatic Thai spices and herbs" },
        { code: "30034", name: "THAI YELLOW CURRY SAUCE", description: "Yellow Curry paste with aromatic Thai spices and herbs" }
      ]
    },
    salad: {
      title: "SALAD DRESSING SAUCES",
      products: [
        { code: "29786", name: "CREAMY JALAPENO DRESSING SAUCE", description: "Creamy salad dressing sauce well balanced with Jalapeno chilli profile" },
        { code: "29789", name: "RAANCH SALAD DRESSING SAUCE", description: "Creamy sauce with the right addition of sour cream profile with the prominent taste of onion well supported with parsley" },
        { code: "29790", name: "TWIN CHILLI VINEGRETTE", description: "Salad dressing with the spicy and tangy notes with the right amount of fermented chilli and sauteed chili" },
        { code: "29791", name: "SRIRCHA CHILLI DRESSING SAUCE", description: "Traditional Thai style Sriracha style salad dressing sauce" },
        { code: "29792", name: "HERBY GARLICO DRESSING SAUCE", description: "Garlic and herby prominent salad dressing" },
        { code: "29793", name: "ORIENTAL DRESSING SAUCE", description: "Classic oriental style salad dressing sauce" }
      ]
    },
    soups: {
      title: "PASTE FOR SOUPS",
      products: [
        { code: "29815", name: "VEG MANCHOW BASE", description: "Thick base for Chinese Manchow soup", application: "Combine with water, bring to a boil and simmer for 3 minutes", dosage: "20%" },
        { code: "29845", name: "PALAK CHILLI BASE", description: "Thick base for Palak chilli soup" },
        { code: "29851", name: "CHEEZY BROCCOLI SOUP BASE", description: "Creamy Taste of Broccoli with cheese" },
        { code: "29849", name: "GAJAR ADRAK-E SHORBA", description: "Carrot and ginger based soup base" }
      ]
    },
    panipuri: {
      title: "PASTES FOR PANIPURI",
      products: [
        { code: "23243", name: "KHATTA MEETTA PANIPURI PASTE", description: "Paste for panipuri with a base taste of Khatta meetta characteristics", application: "Mix with chilled water and serve chilled", dosage: "50%" },
        { code: "30118", name: "HAJOLA PANIPURI PASTE", description: "Paste for panipuri with a cooling Hajmola style profile" },
        { code: "30124", name: "IMLI PANIPURI PASTE", description: "Tangy and mild spicy variant for panipuri" },
        { code: "30125", name: "HINGOLI PANIPURI PASTE", description: "Paste for panipuri with a dash of asafoetida" },
        { code: "30132", name: "LASOONI PANIPURI PASTE", description: "Paste for panipuri with a dash of garlic" },
        { code: "30133", name: "PINEAPPLE PANIPURI PASTE", description: "Pineapple based paste for panipuri applications" },
        { code: "23935", name: "HING JEERA PANIPURI PASTE", description: "Paste for panipuri with ther right combination of asafoetida and cumin" },
        { code: "23934", name: "SPICY MANGO PANIPURI PASTE", description: "Paste for panipuri with a base taste of spicy mango well suported with traditional chat spices" },
        { code: "26328", name: "PANIPURI PASTE", description: "Original style panipuri paste with the right combination of mint coriander and spices" }
      ]
    },
    gravies: {
      title: "RTC GRAVYS",
      products: [
        { code: "29955", name: "VEGETABLE GRAVY", description: "Rich creamy and nutty gravy for various curry preparation", application: "Perfect base for various curry applications. Just mix with water, add your base (meat/veggies/paneer), and cook until done", dosage: "1:2 (Gravy base : water)" },
        { code: "29954", name: "MIRCHI KA SALAN", description: "Nutty, tangy and spicy gravy with the flavourful tadka note" },
        { code: "30099", name: "ROAST GRAVY FOR RICE", description: "Fine roasted gravy with aromatic spices and herbs for instant rice application" },
        { code: "3028", name: "SAMBAR BASE", description: "Ready to cook south indian style sambar base" },
        { code: "30239", name: "PREMIUM MAKHNI GRAVY", description: "Makhani gravy enriched with nutty, tomato, robust indian spices and cream" },
        { code: "28124", name: "PULIOGARE GRAVY", description: "Thick and wholeome base for Traditional south indian style pulilyogere" },
        { code: "29323", name: "RED GRAVY BASE", description: "Classic Indian red gravy base with the right combination of tomatoes, spices, reamy and nutty characteristics" },
        { code: "29324", name: "BROWN GRAVY BASE", description: "Sauteed onion prominent garvy supported with tomatoes and robust spices" },
        { code: "29325", name: "WHITE GRAVY BASE", description: "Rich creamy and nutty gravy for various curry preparation" },
        { code: "29502", name: "YELLOW GRAVY BASE", description: "Rich creamy and nutty gravy with mild spices for various curry preparation" },
        { code: "29575", name: "HARIYALI BASE", description: "Multipurpose base for various cuilinary applications which requires an aromatic and herby mint and coriander base taste" },
        { code: "29841", name: "PAV BHAJI PASTE", description: "Ready to cook base for pav bhaji" },
        { code: "29034", name: "BUTTER CHICKEN GRAVY", description: "Rich creamy gravy base for butter chicken" },
        { code: "28125", name: "MAJBOOS RICE GRAVY", description: "Base for traiditonal Arabic style majboos preparations" }
      ]
    },
    marinades: {
      title: "MARINADES",
      products: [
        { code: "26367", name: "PERI PERI MARINADE", description: "Vibrant, spicy, complex yet flavorful marinade that also doubles up as a dipping sauce", application: "Marinate the meat and keep refrigerated for 2 hours and grill in hot oven", dosage: "10-15%" },
        { code: "27605", name: "CHICKEN 65 MARINADE", description: "Hot and spicy marinade for chicken with the balanced combination of ginger, garlic and garam masala" },
        { code: "20835", name: "HOT CHILLI MARINADE", description: "Red hot marinade with an prominent chilli profile" },
        { code: "29525", name: "FIERY GRILL MARINADE", description: "Spicy and tangy marinade for grill applications" },
        { code: "22384", name: "MALABARI MARINADE", description: "Traditional malabari stylle marinade with a base taste of ginger, green chillies and spices well balanced with aromatic curry leave profile" },
        { code: "22381", name: "FIERY RED MARINADE", description: "Fiery red marinade with an enhanced chilli feel with a hint of garlic and grilling spices" },
        { code: "20848", name: "GREENY TREAT MARINADE", description: "Spicy and aromatic marinade with a base of taste of herby greens with a hit of green chillies" },
        { code: "22382", name: "HARIYALI MARINADE", description: "Traditional Indian style aromatic marinade with the prominent taste of green herbs well balnced with the righjt combination of robust indian spices" },
        { code: "22389", name: "SPICY BLACK PEPPER MARINADE", description: "Bold and flavourful marinade with the perfect balance of herbs and spices on peppery base" }
      ]
    }
  };

  return (
    <div className={styles.productsContainer}>
      {Object.entries(categories).map(([key, category]) => (
        <section key={key} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category.title}</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.productsTable}>
              <thead>
                <tr>
                  <th>REF CODE</th>
                  <th>PRODUCT</th>
                  <th>DESCRIPTION</th>
                  <th>APPLICATION</th>
                  <th>DOSAGE</th>
                </tr>
              </thead>
              <tbody>
                {category.products.map((product) => (
                  <tr key={product.code}>
                    <td className={styles.refCode}>{product.code}</td>
                    <td>{product.name}</td>
                    <td className={styles.description}>{product.description}</td>
                    <td>{product.application || "Various applications"}</td>
                    <td>{product.dosage || "As desired"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}
