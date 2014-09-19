/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.bfh.unicert.issuer.cryptography;

import ch.bfh.unicrypt.helper.array.classes.ByteArray;
import ch.bfh.unicrypt.helper.converter.classes.bytearray.BigIntegerToByteArray;
import java.math.BigInteger;
import java.nio.ByteOrder;

/**
 * Class specifying how to convert a BigInteger to a ByteArray. The leading 0 in the ByteArray are removed
 *
 * @author Philémon von Bergen
 */
public class RemovingLeadingZerosBigIntegerToByteArray extends BigIntegerToByteArray {

    public RemovingLeadingZerosBigIntegerToByteArray(ByteOrder byteOrder) {
	super(byteOrder);
    }

    @Override
    public BigInteger abstractReconvert(ByteArray byteArray) {
	//TODO invert the function !
	return super.abstractReconvert(byteArray);
    }

    @Override
    public ByteArray abstractConvert(BigInteger bigInteger) {
	//TODO how does it work with Little Endian ??
	ByteArray ba = super.abstractConvert(bigInteger);
	int count = 0;
	while (ba.getByteAt(count) == 0) {
	    count++;
	}
	return ByteArray.getInstance(ba.extract(count, ba.getLength() - count));
    }

    public static BigIntegerToByteArray getInstance() {
	return RemovingLeadingZerosBigIntegerToByteArray.getInstance(ByteOrder.BIG_ENDIAN);
    }

    public static BigIntegerToByteArray getInstance(ByteOrder byteOrder) {
	if (byteOrder == null) {
	    throw new IllegalArgumentException();
	}
	return new RemovingLeadingZerosBigIntegerToByteArray(byteOrder);
    }

}
