package org.yellowhatpro.portfolio_ashutosh.ui


import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.animateContentSize
import androidx.compose.animation.core.tween
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.KeyboardArrowDown
import androidx.compose.material.icons.rounded.KeyboardArrowUp
import androidx.compose.material3.*
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@OptIn(ExperimentalMaterial3Api::class)
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent{
            var cardHeight by remember {
                mutableStateOf(90)
            }
            Scaffold(modifier = Modifier.fillMaxSize()) { paddingValues->
                    Column(modifier= Modifier
                        .fillMaxWidth()
                        .padding(paddingValues),
                    horizontalAlignment = Alignment.CenterHorizontally){
                        Card(
                            Modifier
                                .fillMaxWidth(0.95f)
                                .height(cardHeight.dp)
                                .padding(top = 10.dp)
                                .animateContentSize(
                                    animationSpec = tween(
                                        durationMillis = 2000
                                    )
                                )) {
                            Column(
                                Modifier
                                    .padding(15.dp)
                                    .animateContentSize(
                                        animationSpec = tween(
                                            durationMillis = 2000
                                        )
                                    )) {
                                var dropDownName by rememberSaveable {
                                    mutableStateOf(false)
                                }
                               Row(horizontalArrangement = Arrangement.SpaceEvenly, verticalAlignment = Alignment.CenterVertically) {
                                   Text(text = "Ashutosh Aswal", color = Color.DarkGray, fontWeight = FontWeight.Bold, fontSize = 20.sp )
                                   Icon(
                                       imageVector = if (!dropDownName) Icons.Rounded.KeyboardArrowDown else Icons.Rounded.KeyboardArrowUp,
                                       contentDescription = "",
                                       Modifier.clickable {
                                           dropDownName = !dropDownName
                                           if (dropDownName){
                                               cardHeight+=50
                                           }else {
                                               cardHeight-=50
                                           }
                                       }
                                   )
                               }
                                AnimatedVisibility (dropDownName){
                                   Column {
                                       Text(text = "Open Source Contributor", fontSize = 15.sp, color = Color.DarkGray)
                                       Spacer(modifier =Modifier.height(10.dp))
                                       Text(text = "Android Developer", fontSize = 15.sp, color = Color.DarkGray)
                                   }
                                }

                            }
                        }
                    }
            }
        }

    }
}